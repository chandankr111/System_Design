class Issue {
    private project?: Project;

    setProject(project: Project): void {
        this.project = project;
    }

    getProject(): Project | undefined {
        return this.project;
    }
}

class Project {
    private issues: Issue[] = [];

    addIssue(issue: Issue): void {
        this.issues.push(issue);
        issue.setProject(this);
    }

    getIssues(): Issue[] {
        return this.issues;
    }
}


// --------------------
// Simple assert helper
// --------------------
function assert(condition: unknown, message: string): void {
    if (!condition) throw new Error(`❌ Assertion failed: ${message}`);
}

// --------------------
// Test Case
// --------------------
(function testProjectIssueAssociation() {
    const issue1 = new Issue();
    const project1 = new Project();

    project1.addIssue(issue1);

    // Check if project contains the issue
    assert(project1.getIssues().includes(issue1),
        "Project should contain the issue");

    // Check if issue references the project
    assert(issue1.getProject() === project1,
        "Issue should reference the project");

    console.log("✅ One-to-Many association test passed");
})();
