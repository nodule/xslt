var xml = libxsltjs.readXmlString($.xml),
  xsl = libxsltjs.readXsltString($.xsl);

output.out = libxsltjs.transform(xml, xsl, []);
