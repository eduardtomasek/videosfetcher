# videosfetcher
[SundayProjects] Just wrapper around yt-dlp

Made for periodical channel or playlist backup.

# Usage
```node downloader.js -f definitions.json```
## Definitions file
```json
[
    {
        "name": "RSD Academy - Basic Electronics",
        "url": "https://www.youtube.com/playlist?list=PLL_nf1OmixTT8ZPpWYcxVEjsp33y0C0o9",
        "path": "d:/videos/youtube/RSD_Academy",
        "fileTemplate": "%(upload_date)s - %(title)s (%(uploader)s,%(id)s)",
        "subtitles": [
            "en",
            "cs"
        ]

    },
    {
        "name": "RSD Academy - Capacitors in DC Circuits",
        "url": "https://www.youtube.com/playlist?list=PLL_nf1OmixTSjkkj56ZnSwEz1lfdbxzNS",
        "format": "bestvideo[height<=960][ext=mp4]+bestaudio[ext=m4a]/bestvideo[height<=960]+bestaudio",
        "path": "d:/videos/youtube/RSD_Academy",
        "subtitles": [
            "en",
            "cs"
        ]
    }
]
```

# Default settings
## Video format
Default video format ```'bestvideo[height<=960][ext=mp4]+bestaudio[ext=m4a]/bestvideo[height<=960]+bestaudio'``` restricts video only with height max 960px. This has two reasons. ```yt-dlp``` version 2021.12.01 for Windows has problem on my machine with processing video format ID 400 ```400 mp4   2160x1080   30 │  108.76MiB 2427k https │ av01.0.08M.08 2427k video only              1080p, mp4_dash```. Probably problem with old ```ffmpeg```. Second reason is disk space. ```1920x960``` is enough resolution for me. :) For change provide your own format string in definitions file.