output.out = node_xslt.transform(
  node_xslt.readXmlString(input.xml),
  node_xslt.readXsltString(input.xsl)
)
