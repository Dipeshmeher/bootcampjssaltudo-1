// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the Article component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Article',
    icon: SitecoreIcon.Book,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'description', type: CommonFieldTypes.RichText },
      { name: 'articleimage', type: CommonFieldTypes.Image },
      { name: 'author', type: CommonFieldTypes.SingleLineText },
      { name: 'publishdate', type: CommonFieldTypes.DateTime },
      {
        name: 'relatedarticle',
        type: CommonFieldTypes.ContentList,       
        /*
        source: `dataSource=/sitecore/content/${packageJson.config.appName}/Content/Styleguide/ContentListField`,
        */
      }
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
