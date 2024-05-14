import { Helmet } from "react-helmet";

function MetaPixel() {
    return (
        <Helmet>
            <script>
                {`!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js')
    fbq('init', '1760744334448265');
    fbq('track', 'PageView')`}
            </script>
            <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1760744334448265&ev=PageView&noscript=1" />`}</noscript>


{/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2BKRK7W3QG"></script>
<script>
{
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2BKRK7W3QG');`
}
</script>



{/* <!-- Matomo --> */}
<script>
{
    `  var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="https://escuelaraybolivarsosa.matomo.cloud/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '5']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src='https://cdn.matomo.cloud/escuelaraybolivarsosa.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
    })();`
}
</script>
{/* <!-- End Matomo Code --> */}


        </Helmet>
    );
}

export default MetaPixel;
