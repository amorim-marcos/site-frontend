// eslint-disable-next-line no-undef
$('body :not(script)')
  .contents()
  .filter(function () {
    return this.nodeType === 3
  })
  .replaceWith(function () {
    return this.nodeValue.replace(/[™®©]/g, '<sup>$&</sup>')
  })
