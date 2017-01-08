#!/usr/bin/python

cgi_path = "/cgi-bin/l2-pythoncgi"

def print_header(title="Hello"):
  print "Content-type: text/html\n\n"
  print "<html>" 
  print "<head>"
  print "<title>%s</title>" % title 
  print "</head>"
  print "<body>"

def print_footer():
  print "</body>"
  print "</html>"
