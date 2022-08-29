// enforces mathjax to render formulas again at the next opportunity
// this is necessary in dynamic web apps where the content may appear after MathJax has already typeset the rest of the page

const isMathJaxInWindowObject = () => 'MathJax' in window;

export const initializeMathJaxQueue = (ref) => {
	if (!isMathJaxInWindowObject) {
		return;
	}
	ref.$nextTick(() => {
		const { MathJax } = window;
		// wait for DOM to be updated and typeset formulas immediately after
		MathJax.Hub.Queue(['Typeset', MathJax?.Hub, document.body]);
	});
};
