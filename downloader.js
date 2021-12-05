const _ = require('lodash')
const fs = require('fs')
const { ensureDirSync, readJsonSync } = require('fs-extra')
const path = require('path')
const ydl = require('@borodutch-labs/yt-dlp-exec')

const { program } = require('commander')
program.version('0.0.2')
program.option('-f, --file <path>', 'Definition file', null)
program.parse(process.argv)

const DEFAULT_OUTPUT = '%(upload_date)s - %(title)s (%(uploader)s,%(id)s)'
const DEFAULT_FORMAT = 'bestvideo[height<=960][ext=mp4]+bestaudio[ext=m4a]/bestvideo[height<=960]+bestaudio'

    ;
(async function main () {
    let definitions = null

    const options = program.opts()

    if (!options.file) {
        console.error('Definition file needed! Bye!')
        return
    }

    if (!fs.existsSync(options.file)) {
        console.error(`Given file path '${options.file}' does not exists! Bye!`)
        return
    }

    try {
        definitions = readJsonSync(options.file)
    } catch (e) {
        console.error('Error during loading definition file!')
        console.error(e.message)
        console.error('Bye!')
        return
    }

    for (const d of definitions) {
        const dirPath = path.join(d.path, d.name)
        const output = d.fileTemplate
        const subs = Array.isArray(d.subtitles) && d.subtitles.length > 0 ? true : false
        const format = d.format

        try {
            ensureDirSync(dirPath)
            process.chdir(dirPath)

            const ydlOptions = {
                downloadArchive: 'archive.txt',
                format: format || DEFAULT_FORMAT,
                ignoreErrors: true,
                output: output || DEFAULT_OUTPUT,
                writeAutoSub: subs || null,
                subLang: subs ? d.subtitles.join(',') : null,
                mergeOutputFormat: 'mp4',
                userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0'
            }

            await ydl(d.url, ydlOptions, {
                stdout: process.stdout,
                stderr: process.stderr,
            })
        } catch (e) {
            console.error(e.message)
        }
    }
})()