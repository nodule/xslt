output.out = libxsltjs.transform(
  libxsltjs.readXmlString(input.xml),
  libxsltjs.readXsltString(input.xsl),
  []
);
