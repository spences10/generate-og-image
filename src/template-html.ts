export function getCss(website: any) {
  const sitesCss: object = {
    'thelocalhost.io': `
      * {
        box-sizing: border-box;
      }
      body {
        background: linear-gradient(0.25turn,
          rgba(170,127,212,1) , rgba(102,51,153,1) );
        height: 100vh;
        font-family: 'Space Mono', sans-serif;
        font-size: 18px;
        padding: 20px;
      }
      .container {
        position: relative;
        height: calc(100vh - 40px);
        padding: 20px;
        background: #f7fafc;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        border-radius: 10px;
      }
      .title {
        font-size: 6em;
        height: 4em;
        overflow: hidden;
        color: #1a202c;
        word-spacing: -20px;
        background: linear-gradient(
          rgba(102,51,153,1),
          rgba(170,127,212,1)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .author {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 30px;
        font-size: 3em;
        color: #4a5568;
      }
      .author-image {
        width: 1.5em;
        border-radius: 50%;
        margin-bottom: -9px;
      }
      .website {
        position: absolute;
        bottom: 0px;
        right: 0px;
        padding: 30px;
        font-size: 2em;
        color: #4a5568;
      }
    `,
    'scottspence.com': `
      * {
        box-sizing: border-box;
      }
      body {
        background: linear-gradient(0.25turn,
          rgba(170,127,212,1) , rgba(102,51,153,1) );
        height: 100vh;
        font-family: 'Space Mono', sans-serif;
        font-size: 18px;
        padding: 20px;
      }
      .container {
        position: relative;
        height: calc(100vh - 40px);
        padding: 20px;
        background: #f7fafc;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        border-radius: 10px;
      }
      .title {
        font-size: 6em;
        height: 4em;
        overflow: hidden;
        color: #1a202c;
        word-spacing: -20px;
        background: linear-gradient(
          rgba(102,51,153,1),
          rgba(170,127,212,1)
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .author {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 30px;
        font-size: 3em;
        color: #4a5568;
      }
      .author-image {
        width: 1.5em;
        border-radius: 50%;
        margin-bottom: -9px;
      }
      .website {
        position: absolute;
        bottom: 0px;
        right: 0px;
        padding: 30px;
        font-size: 2em;
        color: #4a5568;
      }
      `,
  }
  return sitesCss[website]
}
