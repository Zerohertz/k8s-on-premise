import Head from 'next/head'

const apps = [
    {"name": "Traefik", "link": "https://traefik.zerohertz.xyz", "image": "https://github-production-user-asset-6210df.s3.amazonaws.com/42334717/261891090-567ab742-b66c-4c38-84f7-feb4d2b4d08f.png"},
    {"name": "Kubernetes", "link": "https://k8s.zerohertz.xyz", "image": "/home/zerohertz/Zerohertz/test.png"},
    {"name": "Prometheus", "link": "https://prometheus.zerohertz.xyz", "image": "https://github.com/Zerohertz/Zerohertz/assets/42334717/7bccafeb-1e34-4163-be1b-75e663eabf07"},
    {"name": "Grafana", "link": "https://grafana.zerohertz.xyz", "image": "https://github.com/Zerohertz/Zerohertz/assets/42334717/7bccafeb-1e34-4163-be1b-75e663eabf07"},
    {"name": "Airflow", "link": "https://airflow.zerohertz.xyz", "image": "https://github.com/Zerohertz/Zerohertz/assets/42334717/7bccafeb-1e34-4163-be1b-75e663eabf07"},
];

export default function Home() {
    return (
      <div className="container">
        <Head>
          <title>App Grid</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
            <div className="img-container">
                <img src="https://github.com/Zerohertz/Zerohertz/assets/42334717/c073bc5c-97d9-4060-9bc3-50f4b5942e61" alt="Description of Image" />
            </div>
          <div className="grid">
            {apps.map((app, index) => (
              <a key={index} href={app.link} target="_blank" rel="noreferrer" className="card">
                <img src={app.image} alt={app.name} />
                <h3>{app.name}</h3>
              </a>
            ))}
          </div>
        </main>
        <style jsx>{`
            .img-container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            
            img {
                width: 80%;
                max-width: 100%;
            }
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            .grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                max-width: 1000px;
                margin: 0 auto;
            }
            @media (min-width: 600px) {
                img {
                    width: 60%;
                }
                .grid {
                grid-template-columns: repeat(3, 1fr);
                }
            }
            @media (min-width: 900px) {
                img {
                    width: 40%;
                  }
                .grid {
                grid-template-columns: repeat(5, 1fr);
                }
            }
          .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 150px;
            padding: 10px;
            text-align: center;
            color: #333; // 텍스트 색상 변경
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: all 0.3s ease; // 효과 시간 조절
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); // 그림자 효과 변경
            background-color: #fff; // 카드 배경색 변경
          }
  
          .card img {
            width: 100%;
            height: 80%;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 5px;
          }
  
          .card:hover {
            border-color: #0070f3;
            transform: translateY(-10px); // 카드가 살짝 위로 움직이는 효과
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); // 그림자 효과 강조
          }
        `}</style>
      </div>
    )
  }
  