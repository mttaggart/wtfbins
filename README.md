# WTFBins HAS MOVED TO [CODEBERG](https://codeberg.org/The-Taggart-Institute/wtfbins)

# WTFBins

**WTFBin (n):** a benign application that exhibits malicious behavior. These applications tend to confuse and alarm security analysts during incident response.

This project exists to identify, catalog, and lightly poke fun at these applications, in the hopes that we can make analysts' lives just a little bit better.

## Contributing

Found a WTFBin? We have a [WTFBin Issue Template](https://github.com/mttaggart/wtfbins/issues/new?assignees=&labels=new+wtfbin&template=custom.md&title=%5BNew+WTFBin%5D%3A+WTFBIN+Here) for you to use! Each one will be reviewed, and if it meets the WTFBin standard, will be added to the catalog.

## What Makes a WTFBin?

We consider each submission individually, but here are some guidelines. WTFBins:

- Do something malware is known to do (e.g. base64-encode PowerShell commands)
  - Use MITRE ATT&CK as a guide
- Are not core components of the operating system
- Show up frequently, or enough to get noticed
- Stop you for a moment during incident response/analysis, making you say: WTF

## Weird Objections

> You're just making a list of places for bad guys to hide!

While it is _theoretically possible_ some sophisticated threat actor is using these exotic applications as hidey-holes, it is sigificantly more likely that they will simply cause noise and confusion during incident response, or false positives in alerting.

And honestly, the baddies don't have to work that hard, usually. We're doing more good than harm with this list. Get outta here with your conspiracy theory-based threat model.
