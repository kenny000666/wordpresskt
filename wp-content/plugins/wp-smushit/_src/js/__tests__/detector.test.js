import {describe, expect, test, it} from "@jest/globals";
import {LCPDetector, SmushLCPDetector} from '../frontend/detector';

describe('background data from property value', () => {
	const dataSet = [
		[
			// background-image: url
			"url('https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg')",
			'background-image',
			[
				'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg'
			]
		],
		[
			// background-image: image-set
			"image-set(" +
			"'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1-768x437.jpeg' 1x, " +
			"'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg' 2x" +
			");",
			'background-image-set',
			[
				'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1-768x437.jpeg',
				'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg',
			]
		],
		[
			// background-image: image-set with url
			"image-set(" +
			"url('https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1-768x437.jpeg') 1x, " +
			"url('https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg') 2x" +
			");",
			'background-image-set',
			[
				'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1-768x437.jpeg',
				'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg',
			]
		],
		[
			// background-image: image-set query params
			"image-set(" +
			"https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1-768x437.jpeg?hello=world 1x, " +
			"https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg?yellow=world 2x" +
			");",
			'background-image-set',
			[
				'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1-768x437.jpeg?hello=world',
				'https://kenny000666.github.io/wordpresskt/wp-content/uploads/2024/08/image1.jpeg?yellow=world',
			]
		],
	];

	it.each(dataSet)('returns correct data for given property value', (propertyValue, type, urls) => {
		const lcpDetector = new SmushLCPDetector();
		const backgroundDataForElement = lcpDetector.getBackgroundDataForPropertyValue(propertyValue);

		expect(backgroundDataForElement).toStrictEqual({
			type: type,
			property: propertyValue,
			urls: urls,
		});
	});
});
