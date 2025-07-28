#!/usr/bin/env python3
##/backup/app.wsgi
import sys
import site
import os

site.addsitedir('/usr/lib64/python3.9/site-packages')sys.path.insert(0, '/backup')
sys.path.insert(0, '/backup')

from app.main import app as application
sudo tail -n 40 /var/log/httpd/backups_error.log