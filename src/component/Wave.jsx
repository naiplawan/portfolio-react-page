import Wave from "react-wavify"

export default function WaveComponent() {
    return (
        <>
        <div className="h-full mt-10">
        <div className="mt-5" style={{ position: 'relative'}}>
            <Wave fill='#3a4c7a'
                    paused={false}
                    style={{ display: 'flex', position: 'absolute', top: 0, left: 0 }}
                    options={{
                        height: 30,
                        amplitude: 80,
                        speed: 0.2,
                        points: 2,
                    }}/>
            <Wave fill='#9da5bd'
                    paused={false}
                    style={{ display: 'flex', position: 'absolute', top: 0, left: 0 }}
                    options={{
                        height: 40,
                        amplitude: 80,
                        speed: 0.25,
                        points: 2,
                        opacity: 0.5,
                    }}/>
        </div>
    </div>
    </>
    )
}
