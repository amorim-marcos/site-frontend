$(function() {
  $('body :not(script)').contents().filter(function () {
    return this.nodeType === 3 && this.parentNode && this.nodeValue.includes('®') && !$(this.parentNode).is('sup');
  }).each(function () {
    const node = this;
    if (node && node.parentNode) {
      const replacedText = node.nodeValue.replace(/(®)/g, '<sup>$1</sup>');
      const newElement = $('<div>').html(replacedText).contents(); 
      $(node).replaceWith(newElement);
    }
  });
});
