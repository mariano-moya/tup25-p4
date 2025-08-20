# Gestión de Alumnos - Programación 4

Herramientas para gestionar información de alumnos de Programación 4, incluyendo lectura/escritura de archivos Markdown y creación automática de estructura de carpetas.

## Características

- Lectura y parsing de archivos Markdown con información de alumnos
- Normalización y escritura de datos de alumnos
- Creación automática de carpetas organizadas por legajo y nombre
- Soporte para múltiples comisiones

## Instalación

```bash
pip install -r requirements.txt
```

## Uso

### Como script
```bash
python convertir.py
```

### Como módulo
```python
from convertir import leer, escribir, normalizar, crear_carpetas

# Leer alumnos desde archivo
alumnos = leer('alumnos.md')

# Crear carpetas organizadas
crear_carpetas(alumnos)

# Normalizar archivo
normalizar('alumnos.md')
```

## Estructura de archivos

- `alumnos.md` - Archivo fuente con datos de alumnos
- `convertir.ipynb` - Notebook con funciones principales
- `tp/` - Carpetas generadas automáticamente para cada alumno

## Formato de entrada

El archivo `alumnos.md` debe seguir este formato:

```markdown
## Comisión A
- 12345  Juan Pérez  555-1234

## Comisión B  
- 67890  María García  555-5678
```
