from pathlib import Path
import re,shutil,subprocess
out=Path(__file__).resolve().parents[1]
for number,name in enumerate(['rio','fita','laboratorio','composicao','diario'],2):
 d=out/f'piloto-{name}';s=(d/'index.html').read_text()
 s=re.sub(r'<link rel="stylesheet" href="([^"]+)">',lambda m:'<style>'+(d/m[1]).read_text()+'</style>',s)
 scripts=[]
 def inline(m):scripts.append('<script>'+(d/m[1]).read_text().replace('</script','<\\/script')+'</script>');return ''
 s=re.sub(r'<script src="([^"]+)" defer></script>',inline,s);s=s.replace('</body>',''.join(scripts)+'</body>')
 (out/f'piloto-{name}.html').write_text(s);(out/f'piloto-integrado/etapas/e{number}.html').write_text(s)
subprocess.run(['python3',str(out/'piloto-integrado/build.py')],check=True)
shutil.copy2(out/'piloto-integrado/index.html',out/'piloto-completo-ate-e6.html')
