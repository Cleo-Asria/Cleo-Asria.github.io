<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:for-each select="note">
    <html>
      <body>
        <p><xsl:value-of select="from"/></p>
        <p><xsl:value-of select="to"/></p>
        <p><xsl:value-of select="context"/></p>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
