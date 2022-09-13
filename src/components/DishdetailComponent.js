import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const CommentDishdetail = ({ comment }) => {
  return (
    <div>
      {comment.comment ? (
        <div>
          <p>{comment.comment}</p>
          <p>
            --{comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </div>
      ) : (
        <div>No comment</div>
      )}
    </div>
  );
};

const Dishdetail = ({ dish }) => {
  return dish ? (
    <div className="container">
      <div className="row" style={{ textAlign: "left" }}>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {dish.comments.map((comment) => {
            return (
              <div key={comment.id}>
                <CommentDishdetail comment={comment} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Dishdetail;
