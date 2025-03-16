// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "An up-to-date list is available on my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-lt-a-class-quot-nav-link-quot-href-quot-https-iadsl-github-io-vista-quot-target-quot-blank-quot-gt-vista-lt-a-gt",
              title: "&lt;a class=&quot;nav-link&quot; href=&quot;https://iadsl.github.io/vista/&quot; target=&quot;_blank&quot;&gt;VISTA&lt;/a&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-lt-a-class-quot-nav-link-quot-href-quot-https-iadsl-github-io-hope-quot-target-quot-blank-quot-gt-hope-lt-a-gt",
              title: "&lt;a class=&quot;nav-link&quot; href=&quot;https://iadsl.github.io/hope/&quot; target=&quot;_blank&quot;&gt;HOPE&lt;/a&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-lt-a-class-quot-nav-link-quot-href-quot-https-iadsl-github-io-floodcast-quot-target-quot-blank-quot-gt-floodcast-lt-a-gt",
              title: "&lt;a class=&quot;nav-link&quot; href=&quot;https://iadsl.github.io/floodcast/&quot; target=&quot;_blank&quot;&gt;Floodcast&lt;/a&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-lt-a-class-quot-nav-link-quot-href-quot-https-iadsl-github-io-shield-quot-target-quot-blank-quot-gt-shield-lt-a-gt",
              title: "&lt;a class=&quot;nav-link&quot; href=&quot;https://iadsl.github.io/shield/&quot; target=&quot;_blank&quot;&gt;SHIELD&lt;/a&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-lt-a-class-quot-nav-link-quot-href-quot-https-iadsl-github-io-visionx-quot-target-quot-blank-quot-gt-visionx-lt-a-gt",
              title: "&lt;a class=&quot;nav-link&quot; href=&quot;https://iadsl.github.io/visionx/&quot; target=&quot;_blank&quot;&gt;VISIONX&lt;/a&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-lt-a-class-quot-nav-link-quot-href-quot-https-iadsl-github-io-capstones-quot-target-quot-blank-quot-gt-students-39-projects-lt-a-gt",
              title: "&lt;a class=&quot;nav-link&quot; href=&quot;https://iadsl.github.io/capstones/&quot; target=&quot;_blank&quot;&gt;Students&#39; Projects&lt;/a&gt;",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses I have taught or am teaching",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-our-paper-an-evaluation-of-big-data-analytics-in-feature-selection-for-long-lead-extreme-floods-forecasting-was-accepted-for-publication-in-the-ieee-international-conference-on-big-knowledge",
          title: 'Our paper An evaluation of big data analytics in feature selection for long-lead...',
          description: "",
          section: "News",},{id: "news-i-served-as-an-assistant-of-publicity-chair-for-the-6th-international-workshop-on-climate-informatics-ci-2016",
          title: 'I served as an Assistant of Publicity Chair for the 6th International Workshop...',
          description: "",
          section: "News",},{id: "news-our-paper-long-lead-prediction-of-extreme-precipitation-cluster-via-a-spatiotemporal-convolutional-neural-network-was-accepted-for-publication-in-the-6th-international-workshop-on-climate-informatics-ci-2016",
          title: 'Our paper Long-lead prediction of extreme precipitation cluster via a spatiotemporal convolutional neural...',
          description: "",
          section: "News",},{id: "news-our-paper-crime-hot-spot-forecasting-a-recurrent-model-with-spatial-and-temporal-information-was-accepted-for-publication-in-the-ieee-international-conference-on-big-knowledge",
          title: 'Our paper Crime hot spot forecasting: A recurrent model with spatial and temporal...',
          description: "",
          section: "News",},{id: "news-thanks-to-the-ai-for-earth-grant-for-supporting-our-work-on-long-lead-flood-forecasting",
          title: 'Thanks to the AI for Earth Grant for supporting our work on long-lead...',
          description: "",
          section: "News",},{id: "news-thank-you-oracle-for-the-doctoral-research-fellowship-in-support-of-my-work-in-long-term-precipitation-forecasting",
          title: 'Thank you Oracle for the Doctoral Research Fellowship in support of my work...',
          description: "",
          section: "News",},{id: "news-our-paper-galaxy-towards-scalable-and-interpretable-explanation-on-high-dimensional-and-spatio-temporal-correlated-climate-data-was-accepted-for-publication-in-the-ieee-international-conference-on-big-knowledge",
          title: 'Our paper Galaxy: Towards Scalable and Interpretable Explanation on High-dimensional and Spatio-Temporal Correlated...',
          description: "",
          section: "News",},{id: "news-i-attended-the-microsoft-ai-for-earth-hackathon-and-education-summit-held-in-redmond-wa-from-october-23-26-2018",
          title: 'I attended the Microsoft AI for Earth Hackathon and Education summit held in...',
          description: "",
          section: "News",},{id: "news-i-joined-the-28th-acm-international-conference-on-information-and-knowledge-management-cikm-2019-as-a-program-committee-member",
          title: 'I joined the 28th ACM International Conference on Information and Knowledge Management (CIKM...',
          description: "",
          section: "News",},{id: "news-with-the-support-of-the-nsf-fellowship-i-joined-radial-analytics-as-an-applied-machine-learning-researcher",
          title: 'With the support of the NSF fellowship, I joined Radial Analytics as an...',
          description: "",
          section: "News",},{id: "news-i-am-a-program-committee-member-of-the-thirty-fifth-aaai-conference-on-artificial-intelligence-aaai-21",
          title: 'I am a Program Committee Member of the Thirty-Fifth AAAI Conference on Artificial...',
          description: "",
          section: "News",},{id: "news-our-project-iii-small-collaborative-research-study-of-neural-architectural-components-in-physics-informed-deep-neural-networks-for-extreme-flood-prediction-where-i-am-the-co-principal-investigator-win-an-nsf-award",
          title: 'Our project III: Small: Collaborative Research: Study of Neural Architectural Components in Physics-Informed...',
          description: "",
          section: "News",},{id: "news-our-paper-mitigating-class-boundary-label-uncertainty-to-reduce-both-model-bias-and-variance-was-accepted-for-publication-in-the-acm-transactions-on-knowledge-discovery-from-data",
          title: 'Our paper Mitigating Class-Boundary Label Uncertainty to Reduce Both Model Bias and Variance...',
          description: "",
          section: "News",},{id: "news-congratulations-to-my-student-everest-yang-on-receiving-an-offer-and-embarking-on-her-college-journey-at-the-university-of-illinois-urbana-champaign-in-computer-science",
          title: 'Congratulations to my student Everest Yang on receiving an offer and embarking on...',
          description: "",
          section: "News",},{id: "news-i-am-a-program-committee-member-of-the-thirty-sixth-aaai-conference-on-artificial-intelligence-aaai-22",
          title: 'I am a Program Committee Member of the Thirty-Sixth AAAI Conference on Artificial...',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-program-committee-member-for-the-2022-siam-international-conference-on-data-mining-sdm-22",
          title: 'I am serving as a Program Committee Member for the 2022 SIAM International...',
          description: "",
          section: "News",},{id: "news-i-completed-my-ph-d-thesis-defense-and-am-feeling-the-joy-however-no-success-can-be-an-individual-accomplishment-without-the-full-support-and-encouragement-of-friends-family-and-colleagues-it-would-be-impossible-to-complete-this-journey",
          title: 'I completed my Ph.D. thesis defense — and am feeling the joy! However,...',
          description: "",
          section: "News",},{id: "news-i-will-serve-as-a-program-committee-member-for-the-28th-sigkdd-conference-on-knowledge-discovery-and-data-mining-kdd2022",
          title: 'I will serve as a Program Committee Member for the 28th SIGKDD Conference...',
          description: "",
          section: "News",},{id: "news-congratulations-to-my-student-everest-yang-on-the-acceptance-of-his-paper-predicting-flood-streamflow-with-auto-regressive-integrated-moving-average-models-for-publication-in-the-journal-of-student-research-jsrhs-well-done-everest",
          title: 'Congratulations to my student Everest Yang on the acceptance of his paper Predicting...',
          description: "",
          section: "News",},{id: "news-i-joined-constant-contact-as-an-senior-machine-learning-engineer",
          title: 'I joined Constant Contact as an Senior Machine Learning Engineer.',
          description: "",
          section: "News",},{id: "news-our-paper-widening-the-time-horizon-predicting-the-long-term-behavior-of-chaotic-systems-was-accepted-for-publication-in-the-ieee-international-conference-on-data-mining-icdm",
          title: 'Our paper Widening the Time Horizon: Predicting the Long-Term Behavior of Chaotic Systems...',
          description: "",
          section: "News",},{id: "news-i-will-join-the-school-of-computing-at-grand-valley-state-university-as-an-assistant-professor-in-fall-2023",
          title: 'I will join the School of Computing at Grand Valley State University as...',
          description: "",
          section: "News",},{id: "news-i-joined-the-32nd-acm-international-conference-on-information-and-knowledge-management-cikm-2023-as-a-program-committee-member",
          title: 'I joined the 32nd ACM International Conference on Information and Knowledge Management (CIKM...',
          description: "",
          section: "News",},{id: "news-i-joined-the-technical-symposium-on-computer-science-education-sigcse-ts-2024-as-a-program-committee-member",
          title: 'I joined the Technical Symposium on Computer Science Education (SIGCSE TS 2024) as...',
          description: "",
          section: "News",},{id: "news-our-paper-castle-a-cascaded-spatio-temporal-approach-for-long-lead-streamflow-forecasting-was-accepted-for-publication-in-the-ieee-international-conference-on-big-data-ieee-bigdata-2023",
          title: 'Our paper CASTLE: A Cascaded Spatio-Temporal Approach for Long-lead Streamflow Forecasting was accepted...',
          description: "",
          section: "News",},{id: "news-i-serve-as-the-student-travel-award-co-chair-for-the-ieee-international-conference-on-big-data-ieee-bigdata-2024",
          title: 'I serve as the Student Travel Award Co-Chair for The IEEE International Conference...',
          description: "",
          section: "News",},{id: "news-i-serve-as-the-pc-chair-for-the-big-data-and-ai-for-healthcare-workshop-at-the-ieee-international-conference-on-big-data-ieee-bigdata-2024",
          title: 'I serve as the PC Chair for the Big Data and AI for...',
          description: "",
          section: "News",},{id: "news-i-joined-the-33rd-acm-international-conference-on-information-and-knowledge-management-cikm-2024-as-a-program-committee-member",
          title: 'I joined the 33rd ACM International Conference on Information and Knowledge Management (CIKM...',
          description: "",
          section: "News",},{id: "news-our-paper-deep-learning-models-for-diabetic-retinopathy-detection-a-comparative-study-was-accepted-for-publication-in-workshop-on-big-data-and-ai-for-healthcare-at-ieee-big-data-2024-conference",
          title: 'Our paper “Deep Learning Models for Diabetic Retinopathy Detection: A Comparative Study” was...',
          description: "",
          section: "News",},{id: "news-our-paper-horizon-forcing-improving-the-recurrent-forecasting-of-chaotic-systems-has-been-accepted-for-publication-in-the-acm-transactions-on-intelligent-systems-and-technology-tist",
          title: 'Our paper, “Horizon Forcing: Improving the Recurrent Forecasting of Chaotic Systems,” has been...',
          description: "",
          section: "News",},{id: "news-i-serve-as-the-student-travel-award-co-chair-for-the-ieee-international-conference-on-data-mining-icdm-2025",
          title: 'I serve as the Student Travel Award Co-Chair for The IEEE International Conference...',
          description: "",
          section: "News",},{id: "news-our-paper-improving-generalization-in-deep-neural-networks-by-mitigating-memorization-was-accepted-for-publication-in-the-pacific-asia-conference-on-knowledge-discovery-and-data-mining-pakdd-2025",
          title: 'Our paper “Improving Generalization in Deep Neural Networks by Mitigating Memorization” was accepted...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
