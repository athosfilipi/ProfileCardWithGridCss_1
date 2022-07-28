
import ProfileCard from "./components/Profiles/ProfileCard";
import ProfilesGrid from "./components/Profiles/ProfilesGrid";

function App() {
    return (
        <>
            My Social - <input type="text" />
            <br />
            <ProfilesGrid>
                <ProfileCard
                    imageSrc={
                        "https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce"
                    }
                    imageSize={180}
                    name={"Athos Filipi"}
                    age={29}
                    eyeColor={"brown"}
                    company={"EVT"}
                    email={"athos.souza@evtit.com"}
                />
            </ProfilesGrid>
        </>
    );
}

export default App;
