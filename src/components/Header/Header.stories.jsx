import Header from 'components/Header/Header';

export default {
  title: 'Header',
  component: Header,
};

function Template() {
  return <Header />;
}

export const DefaultHeader = Template.bind({});

DefaultHeader.args = {};