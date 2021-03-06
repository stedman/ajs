import React from 'react';
import ExternalLink from './external-link';
import OrgData from '../content/organizations.yaml';

const PostSponsor = ({ sponsor }) => {
  const biz = sponsor && sponsor.key
    ? OrgData[`${sponsor.key}`]
    : undefined;

  return (
    <>
      {biz
        && (
          <div className="tile">
            <div className="tile is-child content">
              <h3>Sponsor</h3>
              <p>Drinks and pizza for this event will be provided by the wonderful folks at <ExternalLink href={biz.url}>{biz.name}</ExternalLink>.</p>
              {sponsor.hiring && biz.careerUrl
                && (
                  <p>
                    {biz.name} is hiring. Check out their <ExternalLink href={biz.careerUrl}>Career page</ExternalLink> for more information.
                  </p>
                )}
            </div>
          </div>
        )}
    </>
  );
};

export default PostSponsor;
