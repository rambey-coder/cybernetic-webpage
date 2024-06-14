import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css/skyblue";

export const Stack = () => {
  return (
    <div
      className="bg-[#396D8D]"
      style={{
        backgroundImage: "url('/assets/ellipse.png')",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "top",
        backgroundSize: "30%",
        padding: "70px 0",
      }}>
      <div className="container">
        <h1 className="text-center text-white text-[30px] font-bold">
          Our Stack
        </h1>
        <p className="text-white text-center my-4">
          Streamlining Tools and Technologies for Enhanced Productivity and
          Efficiency
        </p>
        <div className="mt-8">
          <Splide
            aria-label="stack"
            options={{
              type: "loop",
              perPage: 6,
              gap: 5,
              autoplay: true,
              interval: 4000,
              breakpoints: {
                1024: {
                  perPage: 4,
                },
                768: {
                  perPage: 3,
                },
                480: {
                  perPage: 1,
                },
              },
            }}>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card overflow-hidden">
                  <img
                    src="/assets/sage.jpeg"
                    alt="Image 1"
                    style={{ objectFit: "cover", height: '100%' }}
                  />
                </div>
                <h5>Amazon Sage Maker</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/openai.svg" alt="Image 1" />
                </div>
                <h5>Open AI</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/chatgpt.svg" alt="Image 1" />
                </div>
                <h5>Chat GPT</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/kensor.png" alt="Image 1" />
                </div>
                <h5>Keras + Tensor Flow</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/oracle.svg" alt="Image 1" />
                </div>
                <h5>Oracle</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/python.svg" alt="Image 1" />
                </div>
                <h5>Python</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/linux.svg" alt="Image 1" />
                </div>
                <h5>Linux</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/docker.svg" alt="Image 1" />
                </div>
                <h5>Docker</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/kubernete.svg" alt="Image 1" />
                </div>
                <h5>Kubernetes</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/azure.svg" alt="Image 1" />
                </div>
                <h5>Microsoft Azure</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/server.svg" alt="Image 1" />
                </div>
                <h5>SQL Server</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/pro.svg" alt="Image 1" />
                </div>
                <h5>Prometheus</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/sharp.svg" alt="Image 1" />
                </div>
                <h5>C Sharp</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/sql.svg" alt="Image 1" />
                </div>
                <h5>MySQL</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/cloud.svg" alt="Image 1" />
                </div>
                <h5>Google Cloud </h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/java.svg" alt="Image 1" />
                </div>
                <h5>Java</h5>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="stack_card_container">
                <div className="stack_card">
                  <img src="/assets/aws.svg" alt="Image 1" />
                </div>
                <h5>Amazon Web Service</h5>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};
