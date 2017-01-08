# dcjs-pythoncgi-tutorial
Interactive Charting using dc js and CGI-Python scripting

Tutorial Primary Objective:
- Primarily aimed at Data Scientists/Analysts to quickly ramp up on
  - java script, dc.js (https://dc-js.github.io/dc.js/)
  - CGI using python (https://www.tutorialspoint.com/python/python_cgi_programming.htm)
  - This combination of tools gives ability to create powerful and dynamic
    visualizations.
  - With cross-filter support in dc.js, you will start to ask questions
    that you did not know to ask.

Acknowledgements
- Python CGI examples sourced from:
  https://www.tutorialspoint.com/python/python_cgi_programming.htm
- Basic dc.js example contributed by Pavan Dendi
- Inspired by dc.js and Big Data Research folks at AT&T.

Pre-Install Notes:
- I use MacbookPro Retina macOS Sierra 10.12.2
- Thankfully, it comes pre-installed with Apache server.
- All I had to do was to enable CGI-bin support by uncommenting line:
  #LoadModule cgi_module libexec/apache2/mod_cgi.so
  in /etc/apache2/httpd.conf and restart Apache Server with command
  sudo apachectl -k restart

Install Notes:
- By default on my Mac:
  - Webserver Documents base directory: /Library/WebServer/Documents
  - CGIExecution binaries base directory: /Library/WebServer/CGI-Executables
  - So, adjust the lines in install.sh script accordingly.
    Note: Also may have to adjust sources accordingly.
- To install:
  sudo bash install.sh

Lesson Plan
- Lesson 1: l1-dcjs
  - Simple example using dc.js and html.

- Lesson 2: l2-pythoncgi
  - If you notice in Lesson 1, there were quite a few hard codings.
  - This lesson introduces you to CGI scripting using python, which enables
    dynamic html/js page creation and remove some hardcodings.

- Lesson 3: l3-dcjs-pythoncgi
  - Combines Lesson 1 and Lesson 2 to create a dynamic web page with dc.js
    visualizations.

- Where to go next:
  - dc.js: https://dc-js.github.io/dc.js/
    - Annotated source for charts on this page:
      https://dc-js.github.io/dc.js/docs/stock.html
