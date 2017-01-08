#!/usr/bin/python

dcjslibdir = 'http://localhost/l3-dcjs-pythoncgi/dcjslibs/'
dcjs_srcdir = 'http://localhost/l3-dcjs-pythoncgi/dcjs-example/'
base_path = "/cgi-bin/l3-dcjs-pythoncgi/cgibin-srcs"

def print_header(title="Hello"):
  print "Content-type: text/html\n\n"
  print '<head>'
  print '<title>%s</title>'%title
  print '<meta charset=\"UTF-8\">'
  print '<link rel="stylesheet" type="text/css" href="%sdc.css"/>'%dcjslibdir
  print '</head>'

  print '<body>'
  print '<div class="container">'

def print_footer():
  print '<script type="text/javascript" src="%sd3.js"></script>' % dcjslibdir
  print '<script type="text/javascript" src="%scrossfilter.js"></script>' % dcjslibdir
  print '<script type="text/javascript" src="%sdc.js"></script>' % dcjslibdir
  print '<script type="text/javascript" src="%sdcjs-simple.js"></script>' % dcjs_srcdir
  print '</div>'
  print '</body>'
  print '</html>'
