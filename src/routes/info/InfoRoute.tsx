import React from "react";
import { MdArrowBack as BackIcon } from "react-icons/all";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page";
import { Info } from "../../modules/info/Info";

export const InfoRoute = () => {
  const title = (
    <FormattedMessage id={ "app.info.title" } defaultMessage='Info' />
  );

  const actions = (
    <Link to='/' className="Page__action">
      <BackIcon className='Page__actionIcon' />
      <FormattedMessage id='app.info.back' defaultMessage='Back' />
    </Link>
  );

  return (
    <Page title={ title } actions={ actions } loading={ false }>
      <Info />
    </Page>
  );
};