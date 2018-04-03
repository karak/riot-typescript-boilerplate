import describeWithTag from './helpers/describe-with-tag';

describeWithTag('sample-app', (getTag) => {
  it('has title header', () => {
    const root = getTag().root;
    expect(root.querySelector('h1')!.textContent).toBe('Sample Riot Application');
  });

  it('has <app-greeting>', () => {
    const root = getTag().root;
    expect(root.querySelector('app-greeting')!.innerHTML).toBe('<p>Hello, World!</p>');
  });
});
