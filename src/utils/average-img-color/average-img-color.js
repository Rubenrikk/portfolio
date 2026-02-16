/**
 * Helper function to extract image data from canvas
 * @param {HTMLImageElement} img - Image element
 * @param {CanvasRenderingContext2D} ctx - Canvas context
 * @returns {Uint8ClampedArray|null} Image data or null on error
 */
function extractImageData(img, ctx) {
	try {
		ctx.drawImage(img, 0, 0);
		const imageData = ctx.getImageData(0, 0, img.width, img.height);
		return imageData.data;
	} catch (error) {
		return null;
	}
}

/**
 * Helper function to calculate color sums from pixel data
 * @param {Uint8ClampedArray} data - Pixel data array
 * @returns {{red: number, green: number, blue: number}} Color sums
 */
function calculateColorSums(data) {
	let red = 0;
	let green = 0;
	let blue = 0;

	for (let i = 0; i < data.length; i += 4) {
		red += data[i];
		green += data[i + 1];
		blue += data[i + 2];
	}

	return { red, green, blue };
}

/**
 * Helper function to normalize color values
 * @param {number} value - Color value
 * @returns {number} Normalized value (minimum 0)
 */
function normalizeColor(value) {
	return value < 0 ? 0 : value;
}

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @param {HTMLImageElement}img una imagen del dom, de ella se obtendrá su color promedio
 * @param {number} brightness Que tanto brillo debe de tener el resultado del color
 * @param {()=>void} onerror
 * @returns {['rgb(0-255,0-255,0-255)', {red,green,blue}]}
 * @example
 * 	const [colorString, colorObject] = getIMGAverageColor(img, 1);
 */
export const getIMGAverageColor = (img, brightness = 1, onerror = () => {}) => {
	// Se crea un canvas para poder acceder a los pixeles
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = img.width;
	canvas.height = img.height;

	if (!ctx) {
		if (onerror) {
			onerror(new Error('Could not get 2d context'));
		}
		return ['', {}];
	}

	const data = extractImageData(img, ctx);
	if (!data) {
		if (onerror) {
			onerror(new Error('Could not extract image data'));
		}
		return ['', {}];
	}

	const colorSums = calculateColorSums(data);
	const numberOfPixels = canvas.width * canvas.height;
	const dataBrightness = parseFloat(img.getAttribute('average-brightness') || '');
	const finalBrightness = dataBrightness || brightness;

	const red = (colorSums.red / numberOfPixels) * finalBrightness;
	const green = (colorSums.green / numberOfPixels) * finalBrightness;
	const blue = (colorSums.blue / numberOfPixels) * finalBrightness;

	const average = {
		red: normalizeColor(red),
		green: normalizeColor(green),
		blue: normalizeColor(blue)
	};

	const rgb = `rgb(${average.red}, ${average.green}, ${average.blue})`;
	return [rgb, average];
};
