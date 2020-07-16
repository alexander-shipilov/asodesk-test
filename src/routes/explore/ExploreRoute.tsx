import React from "react";
import { MdArrowBack as BackIcon } from "react-icons/all";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page";

export const ExploreRoute = () => {
  const title = (
    <FormattedMessage id={ "app.explore.title" } defaultMessage='Explore' />
  );

  const actions = (
    <Link to='/' className="Page__action">
      <BackIcon className='Page__actionIcon' />
      <FormattedMessage id='app.explore.back' defaultMessage='Back' />
    </Link>
  );


  return (
    <Page title={ title } actions={ actions } loading={ false }>
    </Page>
  );
};