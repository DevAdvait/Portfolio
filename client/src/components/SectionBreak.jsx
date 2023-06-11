export default function SectionBreak({section}) {
  return (
    <div className="section-breakline">
      <hr />
      <div className="text-center" style={{fontFamily:"Lora, serif"}}>{section}</div>
      <hr />
    </div>
  );
}
