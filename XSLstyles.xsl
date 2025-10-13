<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
      <html>
        <body>
          <div class="notes">
            <xsl:for-each select="notes/note">
              <div class="note">
                <p class="from">From: <xsl:value-of select="from"/></p>
                <p class="to">To: <xsl:value-of select="to"/></p>
                <p class="context"><xsl:value-of select="context"/></p>
              </div>
            </xsl:for-each>
          </div>
        </body>
      </html>
  </xsl:template>
</xsl:stylesheet>
