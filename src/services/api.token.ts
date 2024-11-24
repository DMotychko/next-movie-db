const token: string = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmI4MTA3MTY5ZTYwMjc3OWY3MWFmYTdmZjc4ZmIzNCIsIm5iZiI6MTczMTY3MzQ4OC45MjQ5NTk3LCJzdWIiOiI2NzM3MWQwNWJhMjlhMDUxYjNjYzkwZDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.26F53Wt9864H4zbM5ylraB8ygzFQpsdx_HmT31suVCA'

type InitWithTokenType = {
    headers: {
        Authorization: string
    }
}
export const initWithToken: InitWithTokenType = {
    headers: {
        Authorization: token
    }
}