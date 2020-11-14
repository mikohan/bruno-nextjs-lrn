import { NextApiRequest, NextApiResponse, NextPageContext } from 'next';
import Router from 'next/router';
import { __appUrl__ } from '~/config';

export default function People(props: any) {
  const { people } = props;
  return (
    <div>
      <h1>Page People</h1>
      <div>{JSON.stringify(people)}</div>
    </div>
  );
}

People.getInitialProps = async function (context: NextPageContext) {
  const people = await getAuthStuff(`${__appUrl__}/api/people`, context);
  return people;
};

async function getAuthStuff(url: string, context: NextPageContext) {
  const cookie = context.req?.headers.cookie;

  const response = await fetch(url, {
    headers: {
      cookie: cookie!,
    },
  });

  if (response.status === 401 && !context.req) {
    Router.replace('/login');
    return {};
  }

  if (response.status === 401 && context.req) {
    context.res?.writeHead(302, {
      Location: `${__appUrl__}/login`,
    });
    context.res?.end();
    return;
  }

  const json = await response.json();
  return { people: json };
}
