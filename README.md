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
        "path": "d:/videos/youtube/RSD_Academy",
        "subtitles": [
            "en",
            "cs"
        ]
    }
]
```
