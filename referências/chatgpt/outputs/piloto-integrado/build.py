from pathlib import Path
import json
base=Path(__file__).resolve().parent
sources=base/'etapas'
pages={str(i):(sources/f'e{i}.html').read_text() for i in range(2,7)}
template=(base/'shell.html').read_text()
(base/'index.html').write_text(template.replace('/*PAGES*/',json.dumps(pages,ensure_ascii=False).replace('<','\\u003c')))
