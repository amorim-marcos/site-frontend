// eslint-disable-next-line no-undef
$('body :not(script)')
  .contents()
  .filter(function () {
    return this.nodeType === 3
  })
  .replaceWith(function () {
    const oldValue = this.nodeValue;
    if (!$(this.parentNode).is('sup')) {
      const newValue = oldValue.includes('®')
        ? oldValue.replace(/(®)/g, '<sup>$1</sup>')
        : oldValue;
      return newValue;
    } else {
      return oldValue;
    }
  });
