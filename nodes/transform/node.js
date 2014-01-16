var xml = libxsltjs.readXmlString(input.xml),
  xsl = libxsltjs.readXsltString(input.xsl);

output.out = libxsltjs.transform(xml, xsl, []);
