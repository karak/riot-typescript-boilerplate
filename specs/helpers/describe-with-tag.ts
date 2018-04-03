// A *HACK* to use type definition without actual import,
// which is forced by karma-riot.
import * as _riot from 'riot';
declare namespace riot {
  const mount: typeof _riot.mount;
}

/**
 * `describe` extension with mounting tags
 *
 * @param tagName name of tag to mount
 * @param callback callback to receive a function to get tag instance via first parameter.
 */
export default function describeWithTag(tagName: string, callback: (getTag: () => _riot.TagInstance) => void) {
  describe(`<${tagName} />`, () => {
    let tags: _riot.TagInstance[];
    let tag: _riot.TagInstance;

    beforeEach(() => {
      const opts: _riot.TagOpts | undefined = undefined;

      const container = document.createElement('div');
      document.documentElement.appendChild(container);
      tags = riot.mount(container, tagName, opts);
      tag = tags[0];
    });

    afterEach(() => {
      tags.forEach(x => x.unmount());
    });

    callback(() => tag);
  });
}
