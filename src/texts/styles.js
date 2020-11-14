export const textColors = (THEME) => ({
    header1: {text: THEME.MAIN_FONT},
    header2: {text: THEME.MAIN_FONT},
    text1: {text: THEME.HINT_FONT}
})
const h1 = {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 40
}
const h2 = {
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 36
}
const text1 = {
    fontSize: 26,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 26
}
export const textStyles = {
    header1: h1,
    header2: h2,
    text1: text1
};
