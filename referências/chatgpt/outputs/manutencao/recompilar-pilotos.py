from pathlib import Path
import re,shutil,subprocess
out=Path(__file__).resolve().parents[1]
repo=out.parents[2]
# Arquivos comuns do layout: o original fica em layout-geral/ e é copiado para cada módulo.
for name in ['rio','fita','laboratorio','composicao','diario']:
 for f in ['layout.js','layout.css','success-audio.js']:shutil.copy2(out/'layout-geral'/f,out/f'piloto-{name}'/f)
for number,name in enumerate(['rio','fita','laboratorio','composicao','diario'],2):
 d=out/f'piloto-{name}';s=(d/'index.html').read_text()
 s=re.sub(r'<link rel="stylesheet" href="([^"]+)">',lambda m:'<style>'+(d/m[1]).read_text()+'</style>',s)
 scripts=[]
 def inline(m):scripts.append('<script>'+(d/m[1]).read_text().replace('</script','<\\/script')+'</script>');return ''
 s=re.sub(r'<script src="([^"]+)" defer></script>',inline,s);s=s.replace('</body>',''.join(scripts)+'</body>')
 (out/f'piloto-{name}.html').write_text(s);(out/f'piloto-integrado/etapas/e{number}.html').write_text(s)
subprocess.run(['python3',str(out/'piloto-integrado/build.py')],check=True)
shutil.copy2(out/'piloto-integrado/index.html',out/'piloto-completo-ate-e6.html')

# app/ (publicado no GitHub Pages) é uma cópia do piloto integrado, mais as imagens da cena do Rio.
app=repo/'app'
if app.is_dir():
 for f in ['README.md','build.py','index.html','shell.html']:shutil.copy2(out/'piloto-integrado'/f,app/f)
 for f in (out/'piloto-integrado/etapas').glob('*.html'):shutil.copy2(f,app/'etapas'/f.name)
 rio=next(repo.glob('refer*'))/'Elementos visuais/rio-pedras/assets'
 dest=app/'rio/assets';dest.mkdir(parents=True,exist_ok=True)
 for f in rio.iterdir():
  if f.suffix=='.png':shutil.copy2(f,dest/f.name)
