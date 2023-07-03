import Heading from "../Components/Heading/Heading";
import Container from "../Components/Container/Container";
import GridLayout from "../Components/DisplayLayouts/GridLayout";

const Booking = () => {
  return (
    <Container>
      <Heading title="Booking" />
      <div>
        <GridLayout gap={10}>
          {Array(5)
            .fill(0)
            .map((el, i) => (
              <p className="border-red-600 border" key={i}>{el}</p>
            ))}
        </GridLayout>
      </div>
    </Container>
  );
};

export default Booking;
