import describeWithTag from './helpers/describe-with-tag';

describeWithTag('app-greeting', (getTag) => {
  it('has paragraph including "Hello, World!"', () => {
    expect(getTag().root.innerHTML).toBe('<p>Hello, World!</p>');
  });
});
