from notebook.auth import passwd
import sys

print(sys.argv)

passf = sys.argv[1].strip()
password = passwd(passf, algorithm='sha256')

config = '''
#{}
c.ServerApp.password = '{}'
c.ServerApp.password_required = True
'''.format(passf, password)

fo = open('/jpt/server/jupyter_lab_config.py', 'w')
fo.write(config)
fo.close()