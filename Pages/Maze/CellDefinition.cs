public struct CellDefinition
{
    public bool IsVisible { get; set; }
    public CellKind Kind { get; set; }

    public bool IsWall => Kind == CellKind.Wall;
}