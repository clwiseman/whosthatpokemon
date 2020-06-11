import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Query_Root } from "../../types/graphql-types";
import Container from "../../components/container"

const GetSession = gql`
  query SessionQuery($joinID: String!) {
    sessions(where: {join_id: {_eq: $joinID}}) {
      usersBySessionId {
        id
        display_name
      }
      join_id
      id
    }
  }
`;

const Lobby: React.FC = () => {
  const { joinID } = useParams();
  const { data, error, loading } = useQuery<Query_Root>(GetSession, {
    variables: { joinID }
  });

  if (loading || error || !data) {
    return <Container>Loading....</Container>;
  }

  return (
    <Container>
      <pre>
        {JSON.stringify(data)}
      </pre>
    </Container>
  );
};

export default Lobby;
