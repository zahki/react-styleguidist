import * as Rsg from '../../typings';

/**
 * Return a copy of the given section with the examples array filtered
 * to contain only the specified index
 *
 * @param {object} section
 * @param {number} index
 * @returns {object}
 */
export default function filterSectionExamples(section: Rsg.Section, index = -1): Rsg.Section {
	const content = Array.isArray(section.content) ? [section.content[index]] : [];
	return {
		...section,
		content,
	};
}
