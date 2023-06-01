
const tld = ["www", "com", "org", "gov", "io", "edu", "net"]

export function getDomainStem(url: string) {

    if (url) {

        try {

            let parts = url.split(".")

            if (parts.length > 0) {

                // Always remove trailing part as it will be a TLD
                parts = parts.slice(0, parts.length - 1)

                // Remove known TLDs and subdomains
                parts = parts.filter(x => {
                    return tld.indexOf(x) == -1
                })

                return parts.join("-")
            }

        } catch (err) {
            // Ignore
        }
    }

    return null
}

export function getParameterByName(name: string, url?: string): string {

    url = url || window.location.search

    name = name.toLowerCase()
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")

    let pattern = "[\\?&]" + name + "=([^&#]*)"
    let re = new RegExp(pattern)
    let res = re.exec(url.toLowerCase())

    if (res) {
        return decodeURIComponent(res[1].replace(/\+/g, " "))
    }

    return undefined
}

export function removeUrlStem(x: string) {
    if (x) {
        return x.replace(/http(s)?:\/\/(www\.)?/g, "")
    }
    return x
}


export function tokeniseUrl(url: string) {

    let qsIndex = !!url ? url.indexOf("?") : -1
    let stem = url
    let params

    if (qsIndex > -1) {

        stem = url.substr(0, qsIndex)
        params = url.substr(qsIndex + 1).split("&").map(x => {
            return x.replace("=", ": ")
        })
    }

    return {
        stem,
        params
    }
}