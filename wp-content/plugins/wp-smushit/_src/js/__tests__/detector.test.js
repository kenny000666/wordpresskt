import {describe, expect, test, it} from "@jest/globals";
import {LCPDetector, SmushLCPDetector} from '../frontend/detector';

describe('background data from property value', () => {
	const dataSet = [
		[
			// background-image: url
			"url('https://example.com/wp-content/uploads/2024/08/image1.jpeg')",
			'background-image',
			[
				'https://example.com/wp-content/uploads/2024/08/image1.jpeg'
			]
		],
		[
			// background-image: image-set
			"image-set(" +
			"'https://example.com/wp-content/uploads/2024/08/image1-768x437.jpeg' 1x, " +
			"'https://example.com/wp-content/uploads/2024/08/image1.jpeg' 2x" +
			");",
			'background-image-set',
			[
				'https://example.com/wp-content/uploads/2024/08/image1-768x437.jpeg',
				'https://example.com/wp-content/uploads/2024/08/image1.jpeg',
			]
		],
		[
			// background-image: image-set with url
			"image-set(" +
			"url('https://example.com/wp-content/uploads/2024/08/image1-768x437.jpeg') 1x, " +
			"url('https://example.com/wp-content/uploads/2024/08/image1.jpeg') 2x" +
			");",
			'background-image-set',
			[
				'https://example.com/wp-content/uploads/2024/08/image1-768x437.jpeg',
				'https://example.com/wp-content/uploads/2024/08/image1.jpeg',
			]
		],
		[
			// background-image: image-set query params
			"image-set(" +
			"https://example.com/wp-content/uploads/2024/08/image1-768x437.jpeg?hello=world 1x, " +
			"https://example.com/wp-content/uploads/2024/08/image1.jpeg?yellow=world 2x" +
			");",
			'background-image-set',
			[
				'https://example.com/wp-content/uploads/2024/08/image1-768x437.jpeg?hello=world',
				'https://example.com/wp-content/uploads/2024/08/image1.jpeg?yellow=world',
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
