require 'rails_helper'

RSpec.describe 'Deal show view patch' do
  let(:original) { Rails.root.join('app/views/accounts/deals/show.html.erb').read }

  before { Plugins::FilePatch.clear_registry! }
  after { Plugins::FilePatch.clear_registry! }

  it 'adds the celebration controller div' do
    load Rails.root.join('storage/plugins/test10/app/views/accounts/deals/show.html.erb')
    result = Plugins::FilePatch.apply('app/views/accounts/deals/show.html.erb', original)

    expect(result).to include('data-controller="test10--celebration"')
    expect(result).to include('data-test10--celebration-deal-name-value')
  end

  it 'does not modify the original file' do
    original_content = Rails.root.join('app/views/accounts/deals/show.html.erb').read
    expect(original_content).not_to include('test10--celebration')
  end
end
