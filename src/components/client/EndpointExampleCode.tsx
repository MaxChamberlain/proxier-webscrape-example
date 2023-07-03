'use client'
import copy_icon from '@/assets/icons/copy.svg'
import check_icon from '@/assets/icons/check.svg'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export default function EndpointExampleCode({ language }: { language: string }) {

    const code: any = {
        'curl': <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id='curl'
            key='curl'
        >
            curl --user USER:PASS &apos;https://proxier.io/v1/queries&apos;
            <br />
            -H &quot;Content-Type: application/json&quot;
            <br />
            -d &apos;&#123;&quot;source&quot;: &quot;google_shopping_search&quot;, &quot;query&quot;: &quot;shoes&quot;, &quot;geo_location&quot;: 
            &quot;United States&quot;&#125;&apos;
        </motion.span>,
        'python': <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id='python'
            key='python'
        >
            import requests
            <br />
            <br />
            url = &quot;https://proxier.io/v1/queries&quot;
            <br />
            <br />
            payload = &quot;&#123;&apos;source&apos;: &apos;google_shopping_search&apos;, &apos;query&apos;: &apos;shoes&apos;, &apos;geo_location&apos;: &apos;United States&apos;&#125;&quot;
            <br />
            headers = &#123;
            <br />
            &nbsp;&nbsp;&quot;Content-Type&quot;: &quot;application/json&quot;,
            <br />
            &nbsp;&nbsp;&quot;Authorization&quot;: &quot;Basic &quot; + base64.b64encode(&quot;USER:PASS&quot;)
            <br />
            &#125;
            <br />
            <br />
            response = requests.request(&quot;POST&quot;, url, headers=headers, data=payload)
            <br />
            <br />
            print(response.text)
        </motion.span>,
        'nodejs': <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id='nodejs'
            key='nodejs'
        >
            var axios = require(&quot;axios&quot;);
            <br />
            <br />
            var options = &#123;
            <br />
            &nbsp;&nbsp;method: &apos;POST&apos;,
            <br />
            &nbsp;&nbsp;url: &apos;https://proxier.io/v1/queries&apos;,
            <br />
            &nbsp;&nbsp;headers: &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&apos;Content-Type&apos;: &apos;application/json&apos;,
            <br />
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&apos;Authorization&apos;: &apos;Basic &apos; + Buffer.from(&apos;USER:PASS&apos;).toString(&apos;base64&apos;)
            <br />
            &#125;
            <br />
            &#125;,
            <br />
            &nbsp;&nbsp;data: &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;source: &apos;google_shopping_search&apos;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;query: &apos;shoes&apos;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;geo_location: &apos;United States&apos;
            <br />
            &#125;
            <br />
            &#125;;
            <br />
            <br />
            axios.request(options).then(function (response) &#123;
            <br />
            &nbsp;&nbsp;console.log(response.data);
            <br />
            &#125;).catch(function (error) &#123;
            <br />
            &nbsp;&nbsp;console.error(error);
            <br />
            &#125;);
        </motion.span>,
        'php': <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id='php'
            key='php'
        >
            &lt;?php
            <br />
            $curl = curl_init();
            <br />
            <br />
            curl_setopt_array($curl, array(
            <br />
            &nbsp;&nbsp;CURLOPT_URL =&gt; &quot;https://proxier.io/v1/queries&quot;,
            <br />
            &nbsp;&nbsp;CURLOPT_RETURNTRANSFER =&gt; true,
            <br />
            &nbsp;&nbsp;CURLOPT_ENCODING =&gt; &quot;&quot;,
            <br />
            &nbsp;&nbsp;CURLOPT_MAXREDIRS =&gt; 10,
            <br />
            &nbsp;&nbsp;CURLOPT_TIMEOUT =&gt; 0,
            <br />
            &nbsp;&nbsp;CURLOPT_FOLLOWLOCATION =&gt; true,
            <br />
            &nbsp;&nbsp;CURLOPT_HTTP_VERSION =&gt; CURL_HTTP_VERSION_1_1,
            <br />
            &nbsp;&nbsp;CURLOPT_CUSTOMREQUEST =&gt; &quot;POST&quot;,
            <br />
            &nbsp;&nbsp;CURLOPT_POSTFIELDS =&gt; &quot;&#123;&apos;source&apos;: &apos;google_shopping_search&apos;, &apos;query&apos;: &apos;shoes&apos;, &apos;geo_location&apos;: &apos;United States&apos;&#125;&quot;,
            <br />
            &nbsp;&nbsp;CURLOPT_HTTPHEADER =&gt; array(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;Content-Type: application/json&quot;,
            <br />
            ));
            <br />
            <br />
            $response = curl_exec($curl);
            <br />
            <br />
            curl_close($curl);
            <br />
            echo $response;
            <br />
            ?&gt;
        </motion.span>,
        'c++': <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id='c++'
            key='c++'
        >
            #include &lt;iostream&gt;
            <br />
            #include &lt;curl/curl.h&gt;
            <br />
            <br />
            int main(void) &#123;
            <br />
            &nbsp;&nbsp;CURL *curl;
            <br />
            &nbsp;&nbsp;CURLcode res;
            <br />
            <br />
            &nbsp;&nbsp;curl_global_init(CURL_GLOBAL_ALL);
            <br />
            &nbsp;&nbsp;curl = curl_easy_init();
            <br />
            &nbsp;&nbsp;if(curl) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, &quot;POST&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;curl_easy_setopt(curl, CURLOPT_URL, &quot;https://proxier.io/v1/queries&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, &quot;https&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;curl_easy_setopt(curl, CURLOPT_POSTFIELDS, &quot;&#123;&apos;source&apos;: &apos;google_shopping_search&apos;, &apos;query&apos;: &apos;shoes&apos;, &apos;geo_location&apos;: &apos;United States&apos;&#125;&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;curl_easy_setopt(curl, CURLOPT_HTTPHEADER, &quot;Content-Type: application/json&quot;);
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;res = curl_easy_perform(curl);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if(res != CURLE_OK)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fprintf(stderr, &quot;curl_easy_perform() failed: %s\n&quot;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;curl_easy_strerror(res));
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;curl_easy_cleanup(curl);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;curl_global_cleanup();
            <br />
            <br />
            &nbsp;&nbsp;return 0;
            <br />
            &#125;
        </motion.span>,
        'java': <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            id='java'
            key='java'
        >
            import java.io.*;
            <br />
            import java.net.*;
            <br />
            import java.nio.charset.StandardCharsets;
            <br />
            <br />
            public class Main &#123;
            <br />
            &nbsp;&nbsp;public static void main(String[] args) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;try &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;URL url = new URL(&quot;https://proxier.io/v1/queries&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HttpURLConnection con = (HttpURLConnection) url.openConnection();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;con.setRequestMethod(&quot;POST&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;con.setRequestProperty(&quot;Content-Type&quot;, &quot;application/json&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;con.setRequestProperty(&quot;Accept&quot;, &quot;application/json&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;con.setDoOutput(true);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String jsonInputString = &quot;&#123;&apos;source&apos;: &apos;google_shopping_search&apos;, &apos;query&apos;: &apos;shoes&apos;, &apos;geo_location&apos;: &apos;United States&apos;&#125;&quot;;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try(OutputStream os = con.getOutputStream()) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;byte[] input = jsonInputString.getBytes(&quot;utf-8&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.write(input, 0, input.length);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try(BufferedReader br = new BufferedReader(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new InputStreamReader(con.getInputStream(), &quot;utf-8&quot;))) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;StringBuilder response = new StringBuilder();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String responseLine = null;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;while ((responseLine = br.readLine()) != null) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;response.append(responseLine.trim());
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(response.toString());
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125; catch (IOException e) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&#125; catch (MalformedURLException e) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();
            <br />
            &nbsp;&nbsp;&#125; catch (IOException e) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;e.printStackTrace();
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            &#125;
        </motion.span>,

    }

    return(
        <div className='bg-white/5 p-2 rounded-xl border border-white/10 relative cursor-pointer h-64 overflow-y-auto' onClick={() => {
            navigator.clipboard.writeText('curl --user USER:PASS \'https://proxier.io/v1/queries\' -H \'Content-Type: application/json\' -d \'{"source": "google_shopping_search", "query": "shoes", "geo_location": "United States"}\'')
            const image: HTMLImageElement = document.getElementById('copy-icon') as HTMLImageElement
            image.classList.replace('opacity-100', 'opacity-0')
            setTimeout(() => {
                image.src = check_icon.src
                image.classList.replace('opacity-0', 'opacity-100')
            }, 300)
            setTimeout(() => {
                image.classList.replace('opacity-100', 'opacity-0')
            setTimeout(() => {
                image.src = copy_icon.src
                image.classList.replace('opacity-0', 'opacity-100')
            }, 300)
            }, 3000)
          }}>
            <Image
              id='copy-icon'
              src={copy_icon}
              alt="copy icon"
              className="w-6 h-6 absolute top-2 right-2 invert transition-opacity duration-300 opacity-100"
            />
            <AnimatePresence mode='wait'>
                {code[language] ?? 'No code available for this language'}
            </AnimatePresence>
          </div>
    )
}