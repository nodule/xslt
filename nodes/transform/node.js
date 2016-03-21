var xml = libxsltjs.readXmlString($.xml);
var xsl = libxsltjs.readXsltString($.xsl);

output.out = $.create(libxsltjs.transform(xml, xsl, []));
